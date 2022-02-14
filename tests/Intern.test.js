const Intern = require("../lib/Intern")

test("test all intern properties", () => {
    const intern = new Intern("Steve", "21", "online@email.com", "college")
    expect(intern.name).toBe("Steve");
    expect(intern.id).toBe("21");
    expect(intern.email).toBe("online@email.com");
    expect(intern.school).toBe("college");
    
})

test("test all intern methods", () => {
    const intern = new Intern("Mike", "28", "me@online.com", "college")
    expect(intern.getName()).toBe("Mike");
    expect(intern.getId()).toBe("28");
    expect(intern.getEmail()).toBe("me@online.com");
    expect(intern.getSchool()).toBe("college");
    expect(intern.getRole()).toBe("Intern");
})