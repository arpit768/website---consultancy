import {
  GraduationCap,
  FileCheck,
  BookOpen,
  Plane,
  DollarSign,
  ClipboardList,
  Briefcase,
  Globe,
  Heart,
  Star,
  Shield,
  Users,
  Award,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  FileCheck,
  BookOpen,
  Plane,
  DollarSign,
  ClipboardList,
  Briefcase,
  Globe,
  Heart,
  Star,
  Shield,
  Users,
  Award,
  MapPin,
};

export type IconName = keyof typeof ICON_MAP;

export const ICON_OPTIONS = Object.keys(ICON_MAP) as IconName[];
