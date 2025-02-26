class AudioLengthPredictor {
    constructor() {
      // Training data
      this.trainingData = {
        features: [
          [151, 25],
          [91, 18],
          [328, 48],
          [304, 54],
          [441, 73]
        ],
        targets: [13, 7, 25, 21, 32]
      };
  
      // Calculate coefficients using linear regression
      this.coefficients = this.calculateCoefficients();
    }
  
    // Helper method to calculate mean of an array
    mean(arr) {
      return arr.reduce((sum, val) => sum + val, 0) / arr.length;
    }
  
    // Calculate coefficients using the normal equation method
    calculateCoefficients() {
      const { features, targets } = this.trainingData;
      
      // Add column of 1s for intercept
      const X = features.map(row => [1, ...row]);
      const y = targets;
  
      // Calculate X transpose
      const Xt = X[0].map((_, colIndex) => X.map(row => row[colIndex]));
  
      // Matrix multiplication: Xt * X
      const XtX = Xt.map(row => {
        return X[0].map((_, j) => {
          return row.reduce((sum, _, k) => sum + row[k] * X[k][j], 0);
        });
      });
  
      // Matrix multiplication: Xt * y
      const Xty = Xt.map(row => {
        return row.reduce((sum, _, i) => sum + row[i] * y[i], 0);
      });
  
      // Matrix inversion and final multiplication (simplified for 3x3 matrix)
      const det = this.determinant3x3(XtX);
      const inv = this.inverse3x3(XtX, det);
      const coeffs = inv.map(row => 
        row.reduce((sum, val, i) => sum + val * Xty[i], 0)
      );
  
      return {
        intercept: coeffs[0],
        charLength: coeffs[1],
        wordLength: coeffs[2]
      };
    }
  
    // Helper method to calculate 3x3 matrix determinant
    determinant3x3(m) {
      return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])
           - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])
           + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
    }
  
    // Helper method to calculate 3x3 matrix inverse
    inverse3x3(m, det) {
      const adj = [
        [(m[1][1] * m[2][2] - m[1][2] * m[2][1]), -(m[0][1] * m[2][2] - m[0][2] * m[2][1]), (m[0][1] * m[1][2] - m[0][2] * m[1][1])],
        [-(m[1][0] * m[2][2] - m[1][2] * m[2][0]), (m[0][0] * m[2][2] - m[0][2] * m[2][0]), -(m[0][0] * m[1][2] - m[0][2] * m[1][0])],
        [(m[1][0] * m[2][1] - m[1][1] * m[2][0]), -(m[0][0] * m[2][1] - m[0][1] * m[2][0]), (m[0][0] * m[1][1] - m[0][1] * m[1][0])]
      ];
      return adj.map(row => row.map(val => val / det));
    }
  
    // Calculate R-squared score
    calculateR2() {
      const { features, targets } = this.trainingData;
      const predictions = features.map(f => this.predict(f[0], f[1]));
      const meanTarget = this.mean(targets);
      
      const totalSum = targets.reduce((sum, val) => sum + Math.pow(val - meanTarget, 2), 0);
      const residualSum = targets.reduce((sum, val, i) => sum + Math.pow(val - predictions[i], 2), 0);
      
      return 1 - (residualSum / totalSum);
    }
  
    // Predict audio length for new inputs
    predict(charLength, wordLength) {
      const { intercept, charLength: charCoef, wordLength: wordCoef } = this.coefficients;
      return Number((intercept + charCoef * charLength + wordCoef * wordLength).toFixed(1));
    }
  
    // Get model information
    getModelInfo() {
      return {
        coefficients: this.coefficients,
        r2Score: this.calculateR2()
      };
    }
}
  
  // Export the class
  export default AudioLengthPredictor;
  
  // Example usage:
  /*
  import AudioLengthPredictor from './AudioLengthPredictor.js';
  
  const predictor = new AudioLengthPredictor();
  
  // Get model information
  const modelInfo = predictor.getModelInfo();
  console.log('Model Information:', modelInfo);
  
  // Make predictions
  const exampleCharLength = 200;
  const exampleWordLength = 35;
  const predictedLength = predictor.predict(exampleCharLength, exampleWordLength);
  console.log(`Predicted audio length for ${exampleCharLength} characters and ${exampleWordLength} words: ${predictedLength} seconds`);
  */