const Engineer = require("../lib/Engineer")

test("test all engineer properties", () => {
    const engineer = new Engineer("Fred", "20", "online@email.com", "Fred22")
    expect(engineer.name).toBe("Fred");
    expect(engineer.id).toBe("20");
    expect(engineer.email).toBe("online@email.com");
    expect(engineer.gitHub).toBe("Fred22");
    
})

test("test all employee methods", () => {
    const engineer = new Engineer("Victor", "7", "me@online.com", "Vic25")
    expect(engineer.getName()).toBe("Victor");
    expect(engineer.getId()).toBe("7");
    expect(engineer.getEmail()).toBe("me@online.com");
    expect(engineer.getGitHub()).toBe("Vic25");
    expect(engineer.getRole()).toBe("Engineer");
})