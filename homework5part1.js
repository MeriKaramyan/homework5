
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const bunchOfColors = ['red', 'blue', 'green'];

const createPoints = function(count, canvasWidth, canvasHeight){

	const points = [];
    

	
 	const someArr = function(num){
 		if (num < 1) {return ""}
 	

 			points.push({
 				x: rand(canvasWidth - 50),
 				y: rand(canvasHeight - 50),
 				width: 50,
 				height: 50,
 				yDelta: 1,
 				xDelta: 1,
 				color: bunchOfColors[rand(3)-1]
 			});
 		someArr(num - 1);
 	};

 	someArr(count);
 	return points;
  };

     
      