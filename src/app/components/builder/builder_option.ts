// Initialize the options for the form with sanitization configurations and builder settings
export default {
    sanitize:true,
    sanitizeConfig: {
      allowedTags: ['','sync-grid','emp-tab'],// Specify allowed tags for sanitization
      addTags: ['','sync-grid','emp-tab'] // Specify additional tags to add during sanitization
    },
    
    builder:{
      basic:{
        default: false,
        weight: 1
      },
      custom:{ // Specify custom groups
        title:'Custom Components',
        default: true,
        weight: 0
      }
    }
  }