package com.efrei.dev2.tp2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        FirstFragment frag1 = new FirstFragment();

        FragmentManager fragManager = getSupportFragmentManager();
        FragmentTransaction fragTransac = fragManager.beginTransaction();
        fragTransac.add(R.id.fLayout,frag1).commit();
    }
}