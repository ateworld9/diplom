// turn to shared api user

export type User = {
    userId: number;
    username: string;
    password: string;

    // createdAt: Date | string;
    // updatedAt: Date | string;
};

export type UserId = User['userId'];
