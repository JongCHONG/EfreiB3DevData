package com.efrei.dev2.tp2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private Button btnFrag1, btnFrag2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnFrag1 = (Button) findViewById(R.id.btnFrag1);
        btnFrag2 = (Button) findViewById(R.id.btnFrag2);

        btnFrag1.setOnClickListener(btnFrag1Clik);
        btnFrag2.setOnClickListener(btnFrag2Clik);

        /*FirstFragment frag1 = new FirstFragment();

        FragmentManager fragManager = getSupportFragmentManager();
        FragmentTransaction fragTransac = fragManager.beginTransaction();
        fragTransac.add(R.id.fLayout,frag1).commit();*/
    }

    private View.OnClickListener btnFrag1Clik = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            FirstFragment frag1 = new FirstFragment();
            replace(frag1);
        }
    };

    private View.OnClickListener btnFrag2Clik = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            SecondFragment frag2 = new SecondFragment();
            replace(frag2);
        }
    };

    public void replace(Fragment frag){
        FragmentManager fragManager = getSupportFragmentManager();
        FragmentTransaction fragTransac = fragManager.beginTransaction();
        fragTransac.replace(R.id.fLayout, frag).commit();
    }

}