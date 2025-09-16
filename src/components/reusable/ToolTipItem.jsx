import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ToolTipItem = ({ children, content }) => {
    return (
        <Tooltip>
        <TooltipProvider>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </TooltipProvider>
        </Tooltip>
    )
}

export default ToolTipItem