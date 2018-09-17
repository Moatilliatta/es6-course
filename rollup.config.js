import buble from 'rollup-plugin-buble';

export default {
  input: 'src/main.js',
  plugins: [ buble() ], // Allow us to transpil ES2015 
  output: {
    file: 'bundle.js',
    format: 'cjs',
	options: {
      transforms: {
	  	dangerousForOf: true
      }
  	} 
  }
};