package com.restaurant;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.splashscreen.RCTSplashScreen; 
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import
import android.content.Intent;
import android.os.Bundle; // here

public class MainActivity extends ReactActivity {
  private PermissionListener listener; // <- add this attribute

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "restaurant";
  }

   @Override
    protected void onCreate(Bundle savedInstanceState) {
    RCTSplashScreen.openSplashScreen(this);   //open splashscreen
    //RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);   //open splashscreen fullscreen
    super.onCreate(savedInstanceState);
   }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    // MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
  }

  public void setPermissionListener(PermissionListener listener) {
    this.listener = listener;
  }

  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    if (listener != null) {
      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }
 

}