package snippet;

public class Snippet {
	#Route Mapping(food-services)
	      - id: food-services
	        uri: http://localhost:8002/
	        predicates:
	        - Path=/food/v1/** 
}

