import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function SidebarFooter({ mini }) {
    return (
        <Typography
            variant="caption"
            sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden', fontSize: 14 }}
        >
            {mini ? '© MUI' : `© ${new Date().getFullYear()} Developed by Reza Geshani`}
        </Typography>
    );
}

SidebarFooter.propTypes = {
    mini: PropTypes.bool.isRequired,
}