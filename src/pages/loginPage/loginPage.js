import { Paper, Button, TextInput } from 'components';

const LoginPage = (props) => {
    return (
        <div className="flex jc-center">
            <Paper
                className="flex fd-col margv-3 padd-1"
                style={{ minWidth: '300px', minHeight: '500px' }}
            >
                <text
                    className="flex jc-center marg-3"
                    style={{ fontSize: '30px' }}
                >
                    ورود
                </text>
                <text
                    // style={{ border: '2px solid red' }}
                    className='flex jc-end'
                >
                    نام کاربری
                </text>
                <TextInput />
                <text
                    // style={{ border: '2px solid red' }}
                    className='flex jc-end'
                >
                    رمز عبور
                </text>
                <TextInput />
                <a
                    className="flex jc-end paddv-1"
                    style={{ fontSize: '12px' }}
                >
                    آیا رمز عبور خود را فراموش کرده‌اید؟</a>
                <Button className="flex jc-center padd-1 ai-center active-back-col txt-col-sec" >ورود</Button>
            </Paper>
        </div>
    );
}

export default LoginPage;