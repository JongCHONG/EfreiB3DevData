package com.efrei.dev2.tp1_dev2_3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText etName;
    private EditText etFName;
    private Button btn;
    private TextView tvAffiche;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        etName = (EditText) findViewById(R.id.etName);
        etFName = (EditText) findViewById(R.id.etFirstName);
        btn = (Button) findViewById(R.id.btnAfficher);
        tvAffiche = (TextView) findViewById(R.id.tvAffichage);


        btn.setOnClickListener(btnClick);

        //Log.i("STATES","L'activité on create");
    }

    private View.OnClickListener btnClick = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            String strName = etName.getText().toString();
            String strFirtName = etFName.getText().toString();
            String strResultat = "";

            if (strName.equals("")){
                if (strFirtName.equals("")){
                    strResultat = "Entrez des valeurs dans les champs";
                }else{
                    strResultat = "Le prénom est "+strFirtName;
                }
            }else{
                strResultat = "Le nom est "+strName;
                if (!strFirtName.equals("")){
                    strResultat += "\nLe prénom est "+ strFirtName;
                }
            }
            tvAffiche.setText(strResultat);
        }
    };
    /*@Override
    protected void onStart() {
        super.onStart();
        Log.i("STATES","L'activité on start");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("STATES","L'activité on stop");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("STATES","L'activité on destroy");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("STATES","L'activité on pause");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("STATES","L'activité on resume");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("STATES","L'activité on restart");
    }*/
}