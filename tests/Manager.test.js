const Manager = require("../lib/Manager")

test("test all Manager properties", () => {
    const manager = new Manager("Jerry", "30", "online@email.com", "888-555-5555")
    expect(manager.name).toBe("Jerry");
    expect(manager.id).toBe("30");
    expect(manager.email).toBe("online@email.com");
    expect(manager.officeNumber).toBe("888-555-5555");
    
})

test("test all manager methods", () => {
    const manager = new Manager("Victor", "7", "me@online.com", "888-555-5555")
    expect(manager.getName()).toBe("Victor");
    expect(manager.getId()).toBe("7");
    expect(manager.getEmail()).toBe("me@online.com");
    expect(manager.getofficeNumber()).toBe("888-555-5555");
    expect(manager.getRole()).toBe("Manager");
})