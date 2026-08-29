'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Search,
  Filter,
  Star,
  Clock,
  Download,
  Trash2,
  FolderOpen,
  File,
  Image,
  FileCode,
} from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const documents = [
  {
    id: 1,
    name: 'Project Proposal 2026',
    type: 'pdf',
    size: '2.4 MB',
    modified: '2 hours ago',
    starred: true,
  },
  {
    id: 2,
    name: 'Design Assets',
    type: 'image',
    size: '15.8 MB',
    modified: '1 day ago',
    starred: false,
  },
  {
    id: 3,
    name: 'API Documentation',
    type: 'code',
    size: '456 KB',
    modified: '3 days ago',
    starred: true,
  },
  {
    id: 4,
    name: 'Meeting Notes',
    type: 'doc',
    size: '128 KB',
    modified: '5 days ago',
    starred: false,
  },
  {
    id: 5,
    name: 'Budget Report Q1',
    type: 'pdf',
    size: '1.2 MB',
    modified: '1 week ago',
    starred: false,
  },
  {
    id: 6,
    name: 'User Research',
    type: 'pdf',
    size: '3.7 MB',
    modified: '2 weeks ago',
    starred: true,
  },
];

const folderConfigs = [
  { key: 'Projects', count: 12 },
  { key: 'Reports', count: 8 },
  { key: 'Templates', count: 5 },
  { key: 'Archives', count: 24 },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-5 w-5 text-red-500" />;
    case 'image':
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image className="h-5 w-5 text-green-500" />;
    case 'code':
      return <FileCode className="h-5 w-5 text-blue-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
};

const recentFiles = [
  { name: 'Q1 Report.pdf', time: '10 min ago' },
  { name: 'Design Mockup.fig', time: '1 hour ago' },
  { name: 'Meeting Notes.docx', time: '3 hours ago' },
];

export function DocumentsDashboard() {
  const { t } = useI18n('documents');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          {t('upload')}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">{t('folders')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {folderConfigs.map((folder) => (
              <button
                key={folder.key}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{t(`foldersList.${folder.key}`)}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {folder.count}
                </Badge>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="col-span-1 md:col-span-3 space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t('searchPlaceholder')} className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-3">
            {documents.map((doc) => (
              <Card
                key={doc.id}
                className="hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{doc.name}</p>
                      {doc.starred && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{doc.size}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {doc.modified}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      title={t('actions.star')}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      title={t('actions.download')}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                      title={t('actions.delete')}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{t('recentFiles')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentFiles.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{file.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
