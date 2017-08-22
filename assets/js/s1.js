   <script>
      const APPKEY = "ufgpoWIahNXUWWW";
      		const APPSECRET = "KepM9Au3PJKB1I8GoctjVbLia";
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
                var g1;
            
                document.addEventListener("DOMContentLoaded", function(event) {
                    g1 = new JustGage({
                        id: "g1",
                        value: 0,
                        min: 0,
                        max: 100,
                        title: "SENSOR 1",
                        label: "Moisture"
                    });
            
                  
            
                    setInterval(function() {
                      
                        g1.refresh(sensor);
                       
                    }, 2500);
                });