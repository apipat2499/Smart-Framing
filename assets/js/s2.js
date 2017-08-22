   <script>
      const APPKEY = "ejUMhKyljIY9C7J";
      		const APPSECRET = "g42chAG9RPTob2HLlS9O9SrV6";
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
                var g2;
            
                document.addEventListener("DOMContentLoaded", function(event) {
                    g2 = new JustGage({
                        id: "g2",
                        value: 0,
                        min: 0,
                        max: 100,
                        title: "SENSOR 2",
                        label: "Moisture"
                    });
            
                  
            
                    setInterval(function() {
                      
                        g2.refresh(sensor);
                       
                    }, 2500);
                });