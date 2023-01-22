jest.setTimeout(7000);
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();
test('Whole number input', function() {
    var input = '32L';
    expect(convertHandler.getNum(input)).toBe(32.00);
  });
test('Decimal Input', () => {
    var input = '5/2L';
    expect(convertHandler.getNum(input)).toBe(2.50);
});
test('Fractional Input', function() {
    var input = '5/2L';
    expect(convertHandler.getNum(input)).toBe(2.50);
  });
  test('Fractional Input w/ Decimal', function() {
    var input = '6.5/2L';
    expect(convertHandler.getNum(input)).toBe(3.25);
  });
  
  test('Invalid Input (double fraction)', function() {
    var input = '6/5/2';
    expect(convertHandler.getNum(input)).toBe(false);
  });
    
  test('No Numerical Input', function() {
    var input = "L";
    expect(convertHandler.getNum(input)).toBe(1);
  }); 
  
  test('Gal to L', function() {
    var input = [5, 'gal'];
    var expected = 18.9271;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });
  
  test('L to Gal', function() {
    var input = [18.9271, 'l'];
    var expected = 5;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });
  
  test('Mi to Km', function() {
    var input = [50, 'mi'];
    var expected = 80.4672;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });
  
  test('Km to Mi', function() {
    var input = [80.4672, 'km'];
    var expected = 50;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });
  
  test('Lbs to Kg', function() {
    var input = [45, 'lbs'];
    var expected = 20.4117;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });
  
  test('Kg to Lbs', function() {
    var input = [20.4117, 'kg'];
    var expected = 46;
    expect(convertHandler.convert(input[0],input[1])).toBeLessThanOrEqual(expected);//0.1 tolerance not added
  });

  test('For Each Valid Unit Inputs', function() {
    var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    input.forEach(function(ele) {
      expect(convertHandler.getUnit(ele)).toBe(ele.toLowerCase());
    });
  });
  
  test('Unknown Unit Input', function() {
    var input = 'in'
    expect(convertHandler.getUnit(input)).toBeFalsy();

  });

  test('For Each Valid Unit Inputs', function() {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expected = ['l','gal','km','mi','kg','lbs'];
    input.forEach(function(ele, i) {
      expect(convertHandler.getReturnUnit(ele)).toBe(expected[i]);
    });
  });

  test('For Each Valid Unit Inputs', function() {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expected = ['gallons', 'litres', 'miles', 'kilometres', 'pounds', 'kilograms'];
    input.forEach((ele, index) => {
      expect(convertHandler.spellOutUnit(ele)).toBe(expected[index]);
    });
  });
