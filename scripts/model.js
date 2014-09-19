define({
  "modes": [
    {
      "title": "timer" 
    },
    {
      "title": "log"
    }
  ],
  "metrics": {
    "weight": {
      "full": "grams",
      "short": "g"
    },
    "time": {
      "full": "seconds",
      "short": "s"
    }
  },
  "presets": [
    {
      "index": "0",
      "title": "Aeropress",
      "weight": {
        "coffee": "14",
        "water": "210",        
      },
      "time": {
        "bloom": "45",
        "brew": "45"        
      }
    },
    {
      "index": "1",
      "title": "Pour Over",
      "weight": {
        "coffee": "20",
        "water": "280"
      },
      "time": {
        "bloom": "45",
        "brew": "180"        
      }
    }
  ]
});