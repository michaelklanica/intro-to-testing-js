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
});