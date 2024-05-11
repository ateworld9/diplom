export const userModelToUserDto = (model) => ({
    id: model._id,
    username: model.username,
    password: model.password,
});
