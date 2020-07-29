// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string "Hello, Jane" when "Jane" is passed into the function', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return a string "Hello, Alex" when "Alex" is passed into the function', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return a string "Hello, Pat" when "Pat" is passed into the function', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return a string "Hello, World" when nothing is passed into the function', function() {
        expect(sayHello()).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when true', function() {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when false', function() {
        expect(sayHello(false)).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when null is passed', function() {
        expect(sayHello(null)).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when empty string is passed', function() {
        expect(sayHello("")).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when 5 is passed', function() {
        expect(sayHello(5)).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when "5" is passed', function() {
        expect(sayHello("5")).toBe("Hello, World");
    });
    it('should return a string "Hello, World" when an array is passed', function() {
        expect(sayHello([1, 2, 3])).toBe("Hello, World");
    });
});

describe('isFive', function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is passed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when "5" is passed', function() {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when 6 is passed', function() {
        expect(isFive(6)).toBe(false);
    });
});

describe('isEven', function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is passed', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is passed', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is passed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when false is passed', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when true is passed', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when nothing is passed', function() {
        expect(isEven()).toBe(false);
    });
});

