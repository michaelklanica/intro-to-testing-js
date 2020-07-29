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
});