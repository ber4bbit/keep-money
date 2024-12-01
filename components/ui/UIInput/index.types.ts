export enum EUIInputTypes {
    Numeric = 'numeric',
    Text = 'default'
}

export interface UIInputProps {
    placeholder?: string,
    textColor?: string,
    classes?: {
        [key: string]: any
    }[],
    inputRef?: any,
    inputType?: EUIInputTypes
    changeHandler?: (value: string | number) => void
}
