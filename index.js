const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(name, birthDate) {
    await prisma.user.create({ 
        data: {
            name, birthDate
        }
    });

}

async function listUser() {
    const user = await prisma.user.findMany();

    console.log(user);
}

listUser();

createUser("Ithalo", new Date());