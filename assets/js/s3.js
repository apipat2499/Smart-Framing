   <script>
      const APPKEY = "ElsKsJOVVxzbcwx";
      		const APPSECRET = "5HjpGYCPRhGegtsqeI0HJKG2s";
      		const APPID = "SmartFraming";
      
      		var microgear = Microgear.create({
      		gearkey: APPKEY,
      		gearsecret: APPSECRET
      		});
      		microgear.on('init', function(data) {
      		console.log(data);
      		});
      
      		microgear.on('message', function(topic,data) {
      		console.log(data);
      		sensor = parseInt(data);
      		});
      		microgear.on('connected', function() {
      		microgear.setname('webapp');
      		microgear.chat("controller","RLD");	
      		});
      
      		microgear.resettoken();
      		microgear.connect(APPID);
            
            
            		var sensor = 0;
                var g3;
            
                document.addEventListener("DOMContentLoaded", function(event) {
                    g3 = new JustGage({
                        id: "g3",
                        value: 0,
                        min: 0,
                        max: 100,
                        title: "SENSOR 3",
                        label: "Moisture"
                    });
            
                  
            
                    setInterval(function() {
                      
                        g3.refresh(sensor);
                       
                    }, 2500);
                });