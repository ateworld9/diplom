import { Typography } from '@mui/material';

export const DashboardPage = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontWeight: '700',
                }}
            >
                <Typography
                    variant="h3"
                    style={{
                        marginBottom: '24px',
                    }}
                >
                    Доходы и Расходы Apple
                </Typography>
                <iframe
                    title="finance_statements(6)"
                    width="1300"
                    height="800"
                    src="https://app.powerbi.com/reportEmbed?reportId=1f23d175-3cd9-4332-9dda-4d5f14224e71&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </>
    );
};

export const AlibabaDashboardPage = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontWeight: '700',
                }}
            >
                <Typography
                    variant="h3"
                    style={{
                        marginBottom: '24px',
                    }}
                >
                    Доходы и Расходы Alibaba
                </Typography>
                <iframe
                    title="finance_statements(6)_alibaba"
                    width="1300"
                    height="800"
                    src="https://app.powerbi.com/reportEmbed?reportId=99fa1e78-778f-4b5b-b9f6-e9f7e57b0827&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </>
    );
};
