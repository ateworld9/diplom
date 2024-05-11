import { TokenModel } from '../src/token/token.model';
import { UserModel } from '../src/user/user.model';

try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('database successfully connected');
} catch (error) {
    console.log('database not connected', error);
}
UserModel.deleteMany({});
TokenModel.deleteMany({});
