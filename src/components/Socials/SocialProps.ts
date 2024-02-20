/** Social props. */
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

/** Social info. */
interface socialInfo {
    ariaLabel: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string },
    href: string,
}

/** Social infos. */
export const socialInfos: socialInfo[] = [
    {
        ariaLabel: 'email',
        Icon: Email,
        href: 'mailto:a.mateussm1.5@gmail.com',
    },
    {
        ariaLabel: 'github',
        Icon: GitHub,
        href: 'https://github.com/MateusSantosMeuBem/',
    },
    {
        ariaLabel: 'linkedin',
        Icon: LinkedIn,
        href: 'https://linkedin.com/in/mateus-do-bit',
    }
]