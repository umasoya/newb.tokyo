let clipboard = new ClipboardJS('.btn');
clipboard.on('success', function(e) {
    console.info(e.text);

    e.clearSelection();
});
