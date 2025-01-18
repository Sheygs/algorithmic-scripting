const booWho = bool => typeof bool === 'boolean';

booWho(true); 
booWho(false);
booWho([]);  
booWho({"a" : 1}); 