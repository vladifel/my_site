import createStyles from "@material-ui/core/styles/createStyles";

export const styles = () =>
    createStyles({
        aboutMeOuter: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '12%',
            height: '68%',
            width: '70%',
            maxWidth: '40rem',
            minWidth: '381px',
            minHeight: '636px',
        },
        aboutMeOuterSmall: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '10%',
            height: '75%',
            width: '60%',
        },
        avatar: {
            width: '10rem',
            height: '10rem',
        },
        avatarContainer: {
            marginTop: '2rem'
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        contactMeOuter: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
            width: '45%',
            maxWidth: '40rem',
            minWidth: '381px',
            minHeight: '351px',
            maxHeight: '20rem'
        },
        cvContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '12%',
            height: '76%',
            width: '60%',
        },
        headTextContainer: {
            marginTop: '2rem',
            textAlign: 'center'
        },
        headTextContainerSmall: {
            marginTop: '0.2rem',
            textAlign: 'center'
        },
        headerTextButton: {
            textTransform: 'none'
        },
        headTextColor: {
            fontFamily: 'BioRhyme',
            color: '#ffff'
        },
        headTextName: {
            fontSize: '1.4rem',
            fontWeight: 1000
        },
        headTextProf: {
            fontSize: '1.1rem',
        },
        iconButton: {
            "&:active, &:hover, &.Mui-focusVisible": {
                backgroundColor: 'transparent',
                fontSize: '1.7rem',
            }
        },
        iconButtonCenter: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.65rem'
            }
        },
        iconButtonLeft: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.55rem 0.55rem 0.75rem'
            }
        },
        iconButtonRight: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.75rem 0.55rem 0.55rem'
            }
        },
        leftPart: {
            width: '20%',
            maxWidth: '20rem',
            minWidth: '12.5rem',
            height: 'fill-available',
            backgroundColor: 'rgba(3, 169, 244, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',

        },
        linkButton: {
            textAlign: 'left',
            marginLeft: '2rem',
            "&:active, &:hover, &.Mui-focusVisible": {
                backgroundColor: 'transparent',
            }
        },
        linkButtonHover: {
            fontWeight: 700
        },
        linkButtonChevron: {
            fontSize: '1.2rem',
            marginLeft: '0.3rem'
        },
        linkButtonCloud: {
            fontSize: '1rem',
            marginLeft: '0.5rem'
        },
        linksContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '3rem'
        },
        linksContainerSmall: {
            overflowY: 'visible'
        },
        linkButtonCV: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        popOutContainer: {
            backgroundColor: 'rgba(3, 169, 244, 0.9)',
            position: 'absolute',
            borderRadius: '1rem',
            marginLeft: '2rem'
        },
        portfolioContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: '12%',
            height: '85%',
            maxHeight: '50rem',
            width: '70%',
            maxWidth: '80rem'
        },
        portfolioContainerSmall: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: '10%',
            height: '85%',
            width: '70%',
        },
        rightPanel: {
            height: '100%',
            width: '40rem',
            marginLeft: 'max(11rem, 20%)'
        },
        root: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'transparent'
        },
        rootTop: {
            top: '20%',
        },
        upperContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });