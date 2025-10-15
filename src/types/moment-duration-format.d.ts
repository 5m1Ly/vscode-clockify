import 'moment';

declare module 'moment' {
    interface Duration {
        format(template?: string, precision?: number, settings?: DurationFormatSettings): string;
    }

    interface DurationFormatSettings {
        forceLength?: boolean;
        precision?: number;
        template?: string;
        trim?: boolean | 'left' | 'right';
    }
}
