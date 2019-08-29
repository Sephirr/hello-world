var rzeczownik = ["Sucker", "Spitter", "Sludge", "Slime", "Shambler", "Ooze", "Lurker","Goo","Elastoplast","Ectoplasm","Decay","Crawler","Blob"];
  var przymiotnik =
  ["Vile", "Scavenging", "Saturated", "Sap", "Rotting", "Ravenous",
   "Primordial", "Prima", "Plague", "Noxious", "Nightmare", "Necrotic",
   "Mwonvuli", "Muculent", "Monstrous", "Mephitic", "Living", "Irradiated",
   "Inexorable", "Green", "Gobbling", "Gluttonous", "Glutinous", "Fungal",
   "Evolving", "Earthen", "Creeping", "Corrosive", "Consumptive",
   "Cloned"];
   var rzecz1 = rzeczownik[Math.floor(Math.random()*rzeczownik.length)];
   var przym1 = przymiotnik[Math.floor(Math.random()*przymiotnik.length)];
   var outp ="Your slime name is "+ przym1+" "+rzecz1;
   window.alert(outp);
