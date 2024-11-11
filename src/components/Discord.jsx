/* eslint-disable no-unused-vars */
import React from 'react'
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import { token } from '../constants/config.json';
import fs from 'node:fs';
import path from 'node:path';

const Discord = () => {
    
    const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds,
            // GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            // GatewayIntentBits.DirectMessages,
            GatewayIntentBits.MessageContent,
            // GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildVoiceStates,
        ],
        partials: [
            Partials.Message,
            Partials.Channel,
            Partials.Reaction
        ],
    });

    client.login(token);
    
  return (
    <div>Discord</div>
  )
}

export default Discord