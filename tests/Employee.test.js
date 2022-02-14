const Employee = require("../lib/Employee")

test("test all employee properties", ()=>{
    const employee = new Employee("Jeff", "12", "me@email.com")
    expect(employee.name).toBe("Jeff");
    expect(employee.id).toBe("12");
    expect(employee.email).toBe("me@email.com");
})

test("test all employee methods", () =>{
    const employee = new Employee("Tim", "5", "email@me.com")
    expect(employee.getName()).toBe("Tim");
    expect(employee.getId()).toBe("5");
    expect(employee.getEmail()).toBe("email@me.com");
    expect(employee.getRole()).toBe("Employee");
})