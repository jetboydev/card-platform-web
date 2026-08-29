export type StatusVariant =
  'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline' | 'active';

export interface StatusConfig {
  label: string;
  variant: StatusVariant;
}

export interface IndustryConfig {
  color: string;
  bg: string;
}
