using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PokemonDatabase;
using PokedexRoulette.Models;
using System.Text.Json;

namespace PokedexRoulette.Controllers;

public class HomeController : Controller
{
    private const string DATA_URL = "https://pokeapi.co/api/v2/pokemon/1";

    private static HttpClient client;

    static async Task<string> GetPokemon() 
    {
    var data = string.Empty;
    var response =  await client.GetAsync(DATA_URL);

    if (response.IsSuccessStatusCode)
    {
        data = await response.Content.ReadAsStringAsync();
    }
    return data;
    }
    
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        client = new HttpClient();
        var result = GetPokemon().GetAwaiter().GetResult();
        Pokemon? test = JsonSerializer.Deserialize<Pokemon>(result);
        System.Console.WriteLine(test);
        
        // ViewData["Pokemon"] = new Pokemon(){
        //     Id = "fzef"
        // };
        ViewData["test"] = test;
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
