export default {
    sanitizeConfig: {
      allowedTags: ['sync-grid'],
      addTags: ['sync-grid']
    },
    
    builder:{
      basic:{
        default: false,
        weight: 1
      },
      custom:{
        title:'Custom Components',
        default: true,
        weight: 0
      }
    }
  }