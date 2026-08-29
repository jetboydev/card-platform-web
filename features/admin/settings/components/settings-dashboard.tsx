'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, Palette, Globe, Key, Mail, Smartphone, Save } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function SettingsDashboard() {
  const { t } = useI18n('settings');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            {t('tabs.profile')}
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            {t('tabs.notifications')}
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            {t('tabs.security')}
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="h-4 w-4" />
            {t('tabs.appearance')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('profile.title')}</CardTitle>
              <CardDescription>{t('profile.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('profile.firstName')}</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('profile.lastName')}</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('profile.email')}</Label>
                <Input id="email" type="email" defaultValue="admin@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t('profile.company')}</Label>
                <Input id="company" defaultValue="TranX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">{t('profile.bio')}</Label>
                <Input id="bio" defaultValue="System Administrator" />
              </div>
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  {t('profile.saveChanges')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('notifications.emailTitle')}</CardTitle>
              <CardDescription>{t('notifications.emailSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t('notifications.marketing')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('notifications.marketingDesc')}
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t('notifications.activity')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('notifications.activityDesc')}
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t('notifications.userUpdates')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('notifications.userUpdatesDesc')}
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('notifications.pushTitle')}</CardTitle>
              <CardDescription>{t('notifications.pushSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t('notifications.mobileApp')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('notifications.mobileAppDesc')}
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('security.passwordTitle')}</CardTitle>
              <CardDescription>{t('security.passwordSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">{t('security.currentPassword')}</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">{t('security.newPassword')}</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t('security.confirmPassword')}</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Key className="h-4 w-4" />
                  {t('security.updatePassword')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('security.twoFactorTitle')}</CardTitle>
              <CardDescription>{t('security.twoFactorSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t('security.enableTwoFactor')}</p>
                  <p className="text-sm text-muted-foreground">{t('security.twoFactorDesc')}</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('appearance.themeTitle')}</CardTitle>
              <CardDescription>{t('appearance.themeSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t('appearance.theme')}</Label>
                <div className="grid grid-cols-3 gap-4">
                  {['Light', 'Dark', 'System'].map((theme) => (
                    <button
                      key={theme}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        theme === 'Light'
                          ? 'border-primary bg-muted/50'
                          : 'border-transparent hover:border-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {t(`appearance.themes.${theme}`)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>{t('appearance.accentColor')}</Label>
                <div className="flex gap-3">
                  {[
                    'bg-blue-500',
                    'bg-green-500',
                    'bg-purple-500',
                    'bg-orange-500',
                    'bg-red-500',
                  ].map((color) => (
                    <button
                      key={color}
                      className={`h-10 w-10 rounded-full ${color} ring-2 ring-offset-2 ring-offset-background transition-all ${
                        color === 'bg-blue-500'
                          ? 'ring-primary'
                          : 'ring-transparent hover:ring-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
