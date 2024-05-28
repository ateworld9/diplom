import { Typography } from '@mui/material';

export const BalanceSheetPage = () => {
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
                    Сводная таблица Apple
                </Typography>
                <iframe
                    title="balance_sheet"
                    width="1300"
                    height="800"
                    src="https://app.powerbi.com/reportEmbed?reportId=dc5651ea-b109-4da4-b392-8909acb4d1da&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </>
    );
};
export const AlibabaBalanceSheetPage = () => {
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
                    Сводная таблица Alibaba
                </Typography>
                <iframe
                    title="balance_sheet_alibaba"
                    width="1300"
                    height="800"
                    src="https://app.powerbi.com/reportEmbed?reportId=9a863e88-8aa5-4e57-be6f-97183115b477&autoAuth=true&ctid=24c0c468-d699-47a3-b18f-d304d154105d"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </>
    );
};
