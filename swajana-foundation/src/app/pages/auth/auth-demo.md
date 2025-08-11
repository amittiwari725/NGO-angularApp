# SWAJANA Foundation - Registration & Login Page

## Features Implemented

### 🎨 **Attractive UI Design**
- **Animated gradient background** with 5 colors that continuously shifts
- **Glassmorphism design** with frosted glass effect and backdrop blur
- **Floating geometric shapes** that animate in the background
- **Colorful top border** with shimmer animation
- **Modern card design** with multiple shadow layers

### 🔐 **Dual Authentication Options**
- **Tabbed interface** allowing users to switch between Registration and Login
- **Registration form** with comprehensive fields:
  - First Name & Last Name (side by side on desktop)
  - Email with validation
  - Password with strength requirements (min 8 characters)
  - Confirm Password with match validation
  - Terms of Service agreement checkbox
- **Login form** with streamlined fields:
  - Email with validation
  - Password
  - Remember Me option
  - Forgot Password link

### ✨ **Rich Animations & Interactions**
- **Page entrance**: Slide up animation for the main card
- **Header animations**: Fade in with staggered timing
- **Tab transitions**: Smooth slide animations when switching between forms
- **Form field interactions**: Hover effects with subtle transforms
- **Button animations**: Pulse effects, hover transforms, and shimmer overlays
- **Validation feedback**: Success pulse and error shake animations
- **Background elements**: Floating shapes and rotating gradient overlays

### 🎨 **Color Scheme & Gradients**
- **Primary gradient**: Blue to purple (#667eea → #764ba2)
- **Background gradient**: 5-color animated gradient
- **Register button**: Blue-purple gradient
- **Login button**: Blue-cyan gradient
- **Social buttons**: Platform-specific gradients (Google red, Facebook blue)
- **Success states**: Green accents with pulse animations
- **Error states**: Red accents with shake animations

### 📱 **Responsive Design**
- **Mobile-first approach** with breakpoints at 768px and 480px
- **Flexible grid layout** for form fields (2 columns → 1 column on mobile)
- **Adaptive typography** with smaller font sizes on mobile
- **Touch-friendly buttons** with appropriate sizing
- **Optimized spacing** for different screen sizes

### 🔍 **Form Validation**
- **Real-time validation** with visual feedback
- **Email format validation**
- **Password strength requirements**
- **Password confirmation matching**
- **Required field validation**
- **Visual success/error indicators** with colored borders and animations

### 🌐 **Social Authentication Options**
- **Google OAuth** button with brand colors
- **Facebook OAuth** button with brand colors
- **Hover animations** for social buttons
- **Responsive layout** (horizontal on desktop, vertical on mobile)

## Usage

Navigate to `/auth` to access the registration and login page. The page features:

1. **Smooth entrance animations** when the page loads
2. **Interactive tab switching** between Registration and Login
3. **Real-time form validation** with visual feedback
4. **Beautiful hover effects** on all interactive elements
5. **Responsive design** that works on all devices

## Technical Implementation

- **Angular 20** with standalone components
- **Angular Material** for form controls and tabs
- **Reactive Forms** with custom validators
- **Angular Animations** with multiple triggers
- **SCSS** with advanced selectors and animations
- **CSS Grid & Flexbox** for responsive layouts
- **CSS Custom Properties** for consistent theming