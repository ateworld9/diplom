import { Typography } from '@mui/material';

export const CashflowPage = () => {
    return (
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
                Финансовый поток Apple
            </Typography>
            <iframe
                title="cashflow"
                width="1300"
                height="800"
                src="https://app.powerbi.com/reportEmbed?reportId=dbc7b1b3-50cb-43d1-b382-9dad9a2d163a&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};
export const AlibabaCashflowPage = () => {
    return (
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
                Финансовый поток Alibaba
            </Typography>
            <iframe
                title="cashflow_alibaba"
                width="1140"
                height="800"
                src="https://app.powerbi.com/reportEmbed?reportId=3f52d11f-f6c6-42b5-be3e-12dd955064ae&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};
