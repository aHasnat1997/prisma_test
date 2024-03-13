import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function prismaCreate() {
  const userCreate = await prisma.user.createMany({
    data: [
      { name: 'John', email: 'john@mail.com' },
      { name: 'Alice', email: 'alice@mail.com' },
      { name: 'Bob', email: 'bob@mail.com' },
      { name: 'Emily', email: 'emily@mail.com' },
      { name: 'Michael', email: 'michael@mail.com' },
      { name: 'Sophia', email: 'sophia@mail.com' },
      { name: 'Daniel', email: 'daniel@mail.com' },
      { name: 'Olivia', email: 'olivia@mail.com' },
      { name: 'James', email: 'james@mail.com' },
      { name: 'Emma', email: 'emma@mail.com' },
      { name: 'William', email: 'william@mail.com' },
      { name: 'Ava', email: 'ava@mail.com' },
      { name: 'Alexander', email: 'alexander@mail.com' },
      { name: 'Mia', email: 'mia@mail.com' },
      { name: 'Ethan', email: 'ethan@mail.com' },
      { name: 'Charlotte', email: 'charlotte@mail.com' },
      { name: 'Benjamin', email: 'benjamin@mail.com' },
      { name: 'Amelia', email: 'amelia@mail.com' },
      { name: 'Mason', email: 'mason@mail.com' },
      { name: 'Harper', email: 'harper@mail.com' },
      { name: 'Elijah', email: 'elijah@mail.com' },
      { name: 'Evelyn', email: 'evelyn@mail.com' },
      { name: 'Liam', email: 'liam@mail.com' },
      { name: 'Abigail', email: 'abigail@mail.com' },
      { name: 'Logan', email: 'logan@mail.com' },
      { name: 'Elizabeth', email: 'elizabeth@mail.com' },
      { name: 'Owen', email: 'owen@mail.com' },
      { name: 'Grace', email: 'grace@mail.com' },
      { name: 'Lucas', email: 'lucas@mail.com' },
      { name: 'Sofia', email: 'sofia@mail.com' },
    ]
  });

  const postCreate = await prisma.post.createMany({
    data: [
      {
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 1
      },
      {
        title: "Post 2",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 2
      },
      {
        title: "Post 3",
        body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 3
      },
      {
        title: "Post 48",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 28
      },
      {
        title: "Post 49",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 29
      },
      {
        title: "Post 50",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 30
      },
      {
        title: "Post 51",
        body: "Vivamus suscipit tortor eget felis porttitor volutpat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 1
      },
      {
        title: "Post 52",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 2
      },
      {
        title: "Post 53",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 3
      },
      {
        title: "Post 70",
        body: "Proin eget tortor risus.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 14
      },
      {
        title: "Post 71",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 15
      },
      {
        title: "Post 72",
        body: "Donec sollicitudin molestie malesuada.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 16
      },
      {
        title: "Post 73",
        body: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 17
      },
      {
        title: "Post 74",
        body: "Nulla porttitor accumsan tincidunt.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 18
      },
      {
        title: "Post 75",
        body: "Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 19
      },
      {
        title: "Post 92",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 26
      },
      {
        title: "Post 93",
        body: "Pellentesque in ipsum id orci porta dapibus.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 27
      },
      {
        title: "Post 94",
        body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 28
      },
      {
        title: "Post 95",
        body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 29
      },
      {
        title: "Post 96",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 30
      },
      {
        title: "Post 97",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 1
      },
      {
        title: "Post 114",
        body: "Sed porttitor lectus nibh. Sed porttitor lectus nibh.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 8
      },
      {
        title: "Post 115",
        body: "Cras ultricies ligula sed magna dictum porta.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 9
      },
      {
        title: "Post 116",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 10
      },
      {
        title: "Post 117",
        body: "Vivamus suscipit tortor eget felis porttitor volutpat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 11
      },
      {
        title: "Post 118",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 12
      },
      {
        title: "Post 119",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 13
      },
      {
        title: "Post 136",
        body: "Proin eget tortor risus.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 20
      },
      {
        title: "Post 137",
        body: "Nulla quis lorem ut libero malesuada feugiat.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 21
      },
      {
        title: "Post 138",
        body: "Donec sollicitudin molestie malesuada.",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        authorId: 22
      }
    ]
  })

  return { userCreate, postCreate }
};