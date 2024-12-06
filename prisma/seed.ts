import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // Criação da família com membro principal
    const joaoFamily = await prisma.family.create({
        data: {
            members: {
                create: {
                    name: "Joao",
                    birthdate: new Date(),
                    relationship: "Pai",
                    gender: "Masculino",
                    head: true,
                }
            }
        },
        select: {
            id: true,
            active: true,
            members: true,
        }
    });
    const joao = joaoFamily.members.find(m => m.head);

    // Criação membro com check
    const felipe = (await prisma.family.update({
        where: {
            id: joaoFamily.id,
        },
        data: {
            members: {
                create: {
                    name: "Felipe",
                    birthdate: new Date(),
                    relationship: "Filho",
                    gender: "Masculino",
                    head: false,
                }
            }
        },
        include: {
            members: true
        }
    })).members.findLast(m => m.createdAt);

    const marciaFamily = await prisma.family.create({
        data: {
            members: {
                create: {
                    name: "Marcia",
                    birthdate: new Date(),
                    relationship: "Mãe",
                    gender: "Feminino",
                    head: true,
                }
            }
        },
        select: {
            id: true,
            active: true,
            members: true,
        }
    });

    /* julia */ await prisma.familyMember.create({
        data: {
            name: "Julia",
            birthdate: new Date(),
            relationship: "Filha",
            gender: "Feminino",
            head: false,
            family: {
                connect: {
                    id: joaoFamily.id
                }
            }
        }
    });


    const marcia = marciaFamily.members.find(m => m.head);

    const pedro = await prisma.familyMember.create({
        data: {
            name: "Pedro",
            birthdate: new Date(),
            relationship: "Neto",
            gender: "Masculino",
            head: false,
            family: {
                connect: {
                    id: marciaFamily.id
                }
            }
        }
    });

    const sopa = await prisma.event.create({
        data: {
            startDate: new Date(),
            endDate: new Date(),
            name: `Sopa ${new Date()}`,
            type: "Sopa"
        }
    });


    const joaoAttendance = prisma.attendance.create({
        data: {
            event: {
                connect: sopa
            },
            member: {
                connect: joao
            }
        }
    });

    const felipeAttendance = prisma.attendance.create({
        data: {
            event: {
                connect: sopa
            },
            member: {
                connect: felipe
            }
        }
    });

    const marciaAttendance = prisma.attendance.create({
        data: {
            event: {
                connect: sopa
            },
            member: {
                connect: marcia
            }
        }
    });

    await Promise.all([felipeAttendance, marciaAttendance, joaoAttendance]);

    const foodParcel = await prisma.event.create({
        data: {
            startDate: new Date(),
            endDate: new Date(),
            name: `Cesta Básica ${new Date()}`,
            type: "Cesta Básica"
        }
    });
    await prisma.attendance.create({
        data: {
            event: {
                connect: foodParcel
            },
            member: {
                connect: pedro
            }
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })