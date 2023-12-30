import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pos.sdk.printer.POIPrinterManager;

public class PrinterConnection extends ReactContextBaseJavaModule {
    //private POIPrinterManager printerManage;
    public PrinterConnection(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PrinterConnection";
    }

    @ReactMethod
    public String myMethod(String message) {
        Log.d("Test",""+message);
        return message;
        // Your implementation here
    }
}