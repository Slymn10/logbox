const logbox = {
    bigLog(page: any, message: string, StackLayout: any, TextView: any, Screen: any, Color: any) {
        const oldContent = page.content;
        const logView = StackLayout;
        const textView = TextView;

        logView.backgroundColor = "rgba(0,0,0,0.65)";
        logView.borderRadius = 7;
        logView.width = Screen.mainScreen.widthDIPs;
        logView.height = Screen.mainScreen.heightDIPs;

        textView.text = message;
        textView.width = Screen.mainScreen.widthDIPs * 0.9;
        textView.height = Screen.mainScreen.heightDIPs * 0.9;
        textView.color = new Color("#fdcb6e");
        textView.style.fontWeight = "bold";
        textView.style.fontSize = 15;

        if (logView.getChildIndex(textView) === -1) {
            logView.addChild(textView);
            page.addEventListener("doubleTap", () => {
                page.content = oldContent;
            })
        }

        page.content = logView;

    }

}

export default logbox;

