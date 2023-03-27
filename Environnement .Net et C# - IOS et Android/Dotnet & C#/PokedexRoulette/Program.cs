using System;
using PokeApiNet.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<PokemonDatabaseSettings>(
    builder.Configuration.GetSection("PokemonDatabase"));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Home/Error");
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

// namespace PokedexRoulette
// {
//   class Program
//   {
//     private const string DATA_URL = "https://pokeapi.co/api/v2/pokemon/1";

//     private static HttpClient client;

//     static async Task<string> GetPokemon() 
//     {
//       var data = string.Empty;
//       var response =  await client.GetAsync(DATA_URL);

//       if (response.IsSuccessStatusCode)
//       {
//         data = await response.Content.ReadAsStringAsync();
//       }

//       return data;
//     }

//     static void Main(string[] args)
//     {
//       client = new HttpClient();
      
//       Console.WriteLine("Pokédex API v1");

//       var result = GetPokemon().GetAwaiter().GetResult();
//       System.Console.WriteLine(result);
//     }
//   }
// }
