import * as turf from "@turf/turf";
const mapUtils = {
  funNameLog: (name) => {
    /**
     *
     * @param {string} name : name to log you name
     */
    console.log("this is function" + name);
  },

  /**
   *
   * @param {Array} shapes
   */
  logLinesLength: (shapes) => {
    const lines = shapes.filter(
      (shape) => shape.geometry.type === "LineString"
    );
    // Extract and log length of each line
    lines.forEach((line, index) => {
      const length = turf.length(line);
      console.log("length of line " + index + " is" + length);
    });
  },
  /** The `calculateTotalAreaAndPerimeter` function takes an array of shapes as input and calculates the
total area and perimeter of polygons and circles within the array. 
*@params {shapes}

*/
  calculateTotalAreaAndPerimeter: (shapes) => {
    // Filter polygons and circles from the array of shapes
    const polygons = shapes.filter(
      (shape) =>shape.geometry.type === "Polygon"
    );
    const circles = shapes.filter(
      (shape) => shape.geometry.type === "Point" && shape.properties.radius
    );

    // Iterate through polygons and accumulate area and perimeter
    polygons.forEach((polygon, index) => {
      // Calculate the area of the Polygon in square kilometers
      const areaInSquareKilometers = turf.area(polygon, {
        units: "kilometers",
      });

      // Calculate the perimeter of the Polygon in kilometers
      const perimeterInKilometers = turf.length(turf.polygon([polygon.geometry.coordinates[0]]), { units: 'kilometers' });

      // Optionally, you can log the area and perimeter of each polygon
      console.log(
        `Polygon ${index}: Area = ${areaInSquareKilometers} sq km, Perimeter = ${perimeterInKilometers} km`
      );
    });

    // Iterate through circles and accumulate area and perimeter
    circles.forEach((circle, index) => {
      // Calculate the area of the Circle in square kilometers
      console.log("circle"+circle);
      const areaInSquareKilometers = turf.area(
        turf.circle(circle.geometry.coordinates, circle.properties.radius, {
          units: "kilometers",
        })
      );

      // Calculate the circumference of the Circle in kilometers
      const perimeterInKilometers = 2 * Math.PI * circle.properties.radius;

      // Optionally, you can log the area and perimeter of each circle
      console.log(
        `Circle ${index}: Area = ${areaInSquareKilometers} sq km, Perimeter = ${perimeterInKilometers} km`
      );
    });
  },
};

export default mapUtils;
