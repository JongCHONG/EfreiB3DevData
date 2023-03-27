package com.example.portfolio;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.content.Intent;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import android.text.TextUtils;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ContactFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ContactFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    Button send;
    EditText name,email,subject,message;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public ContactFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment BlankFragment.
     */

    // TODO: Rename and change types and number of parameters
    public static ContactFragment newInstance(String param1, String param2) {
        ContactFragment fragment = new ContactFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_contact, container, false);

        /*return inflater.inflate(R.layout.fragment_contact, container, false);*/
        name = view.findViewById(R.id.your_name);
        email = view.findViewById(R.id.your_email);
        subject = view.findViewById(R.id.your_subject);
        message = view.findViewById(R.id.your_message);
        send = (Button) view.findViewById(R.id.post_message);

        send.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                String user_name = name.getText().toString();
                String user_email = email.getText().toString();
                String user_subject= subject.getText().toString();
                String user_message = message.getText().toString();

                if (TextUtils.isEmpty(user_name)){
                    name.setError("Entrez un nom");
                    name.requestFocus();
                    return;
                }

                Boolean onError = false;

                if (!isValidEmail(user_email)) {
                    onError = true;
                    email.setError("Email incorrect");
                    return;
                }

                if (TextUtils.isEmpty(user_subject)){
                    subject.setError("Dites moi votre sujet");
                    subject.requestFocus();
                    return;
                }

                if (TextUtils.isEmpty(user_message)){
                    message.setError("Veuillez laisser un message");
                    message.requestFocus();
                    return;
                }

                Intent sendEmail = new Intent(android.content.Intent.ACTION_SEND);

                /* Fill it with Data */
                sendEmail.setType("plain/text");
                sendEmail.putExtra(android.content.Intent.EXTRA_EMAIL, new String[]{"jochong27@gmail.com"});
                sendEmail.putExtra(android.content.Intent.EXTRA_SUBJECT, user_subject);
                sendEmail.putExtra(android.content.Intent.EXTRA_TEXT,
                        "name:"+name+'\n'+"Email ID:"+email+'\n'+"Message:"+'\n'+message);

                /* Send it off to the Activity-Chooser */

                startActivity(Intent.createChooser(sendEmail, "Send mail..."));
            }

            public void onResume() {
                onResume();
               //Get a Tracker (should auto-report)
            }

            protected void onStart() {
                onStart();
            }

            protected void onStop() {
                onStop();
            }

            private boolean isValidEmail(String email) {
                String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
                Pattern pattern = Pattern.compile(EMAIL_PATTERN);
                Matcher matcher = pattern.matcher(email);
                return matcher.matches();
            }
        });
        return view;
    }
}