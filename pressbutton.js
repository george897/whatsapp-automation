     setInterval(() => {
        let sendButton= document.querySelector('span[data-icon="send"]');
        sendButton.click(); 
    }, 1000);    
    setTimeout(()=>{
        window.close();
    },7000)
